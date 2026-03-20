// Dashboard JavaScript
class DashboardManager {
    constructor() {
        this.currentSection = 'dashboard';
        this.data = {
            places: [],
            gallery: [],
            facts: [],
            messages: []
        };
        this.init();
    }

    async init() {
        this.setupEventListeners();
        await this.loadAllData();
        this.updateStats();
        this.renderCurrentSection();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                if (section) {
                    this.showSection(section);
                }
            });
        });

        // Search
        const searchInput = document.getElementById('places-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterPlaces(e.target.value);
            });
        }

        // Modal form submission
        const modalForm = document.getElementById('modal-form');
        if (modalForm) {
            modalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }

    async loadAllData() {
        try {
            // Load places
            const placesResponse = await fetch('/api/places');
            if (placesResponse.ok) {
                const placesData = await placesResponse.json();
                this.data.places = placesData.places || [];
            }

            // Load gallery
            const galleryResponse = await fetch('/api/gallery');
            if (galleryResponse.ok) {
                const galleryData = await galleryResponse.json();
                this.data.gallery = galleryData.gallery || [];
            }

            // Load facts
            const factsResponse = await fetch('/api/facts');
            if (factsResponse.ok) {
                const factsData = await factsResponse.json();
                this.data.facts = factsData.facts || [];
            }

            // Load messages
            const messagesResponse = await fetch('/api/contact');
            if (messagesResponse.ok) {
                const messagesData = await messagesResponse.json();
                this.data.messages = messagesData.entries || [];
            }
        } catch (error) {
            console.error('Error loading data:', error);
            this.showToast('Error loading data', 'error');
        }
    }

    updateStats() {
        // Update header stats
        document.getElementById('total-places').textContent = this.data.places.length;
        document.getElementById('total-messages').textContent = this.data.messages.length;

        // Update dashboard stats
        document.getElementById('dashboard-places').textContent = this.data.places.length;
        document.getElementById('dashboard-gallery').textContent = this.data.gallery.length;
        document.getElementById('dashboard-facts').textContent = this.data.facts.length;
        document.getElementById('dashboard-messages').textContent = this.data.messages.length;

        // Update sidebar badges
        document.getElementById('places-count').textContent = this.data.places.length;
        document.getElementById('gallery-count').textContent = this.data.gallery.length;
        document.getElementById('facts-count').textContent = this.data.facts.length;

        // Update quick stats
        this.updateQuickStats();
    }

    updateQuickStats() {
        // Most popular district
        const districts = {};
        this.data.places.forEach(place => {
            districts[place.district] = (districts[place.district] || 0) + 1;
        });
        const popularDistrict = Object.keys(districts).reduce((a, b) => 
            districts[a] > districts[b] ? a : b, 'N/A');
        document.getElementById('popular-district').textContent = popularDistrict;

        // Total categories
        const categories = new Set(this.data.places.map(place => place.category));
        document.getElementById('total-categories').textContent = categories.size;
    }

    showSection(sectionName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Update content
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`${sectionName}-section`).classList.add('active');

        this.currentSection = sectionName;
        this.renderCurrentSection();
    }

    renderCurrentSection() {
        switch (this.currentSection) {
            case 'places':
                this.renderPlaces();
                break;
            case 'gallery':
                this.renderGallery();
                break;
            case 'facts':
                this.renderFacts();
                break;
        }
    }
    renderPlaces() {
        const tbody = document.getElementById('places-table');
        if (!tbody) return;

        if (this.data.places.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="loading">No places found</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = this.data.places.map(place => `
            <tr>
                <td>${place.id}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.2rem;">${place.emoji || '🏛️'}</span>
                        <strong>${place.name}</strong>
                    </div>
                </td>
                <td>${place.district}</td>
                <td>
                    <span class="category-badge category-${place.category}">
                        ${place.category}
                    </span>
                </td>
                <td>
                    ${place.image ? `<img src="${place.image}" alt="${place.name}" class="table-image">` : 'No image'}
                </td>
                <td class="table-actions">
                    <button class="btn btn-sm btn-secondary" onclick="dashboard.editItem('place', ${place.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="dashboard.deleteItem('place', ${place.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    renderGallery() {
        const container = document.getElementById('gallery-grid');
        if (!container) return;

        if (this.data.gallery.length === 0) {
            container.innerHTML = `
                <div class="loading-card">
                    <i class="fas fa-images"></i>
                    <p>No gallery images found</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.data.gallery.map(item => `
            <div class="gallery-item">
                <img src="${item.src}" alt="${item.caption}" class="gallery-image">
                <div class="gallery-content">
                    <h3>${item.caption || 'Untitled'}</h3>
                    <p>Size: ${item.size || 'normal'}</p>
                    <div class="gallery-actions">
                        <button class="btn btn-sm btn-secondary" onclick="dashboard.editItem('gallery', ${item.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="dashboard.deleteItem('gallery', ${item.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderFacts() {
        const container = document.getElementById('facts-grid');
        if (!container) return;

        if (this.data.facts.length === 0) {
            container.innerHTML = `
                <div class="loading-card">
                    <i class="fas fa-lightbulb"></i>
                    <p>No cultural facts found</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.data.facts.map(fact => `
            <div class="fact-item">
                <div class="fact-header">
                    <span class="fact-emoji">${fact.emoji || '💡'}</span>
                    <h3 class="fact-title">${fact.title}</h3>
                </div>
                <div class="fact-content">
                    ${fact.fact}
                </div>
                <div class="fact-actions">
                    <button class="btn btn-sm btn-secondary" onclick="dashboard.editItem('fact', ${fact.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="dashboard.deleteItem('fact', ${fact.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    filterPlaces(searchTerm) {
        const tbody = document.getElementById('places-table');
        if (!tbody) return;

        const filteredPlaces = this.data.places.filter(place => 
            place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            place.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
            place.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredPlaces.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="loading">No places match your search</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = filteredPlaces.map(place => `
            <tr>
                <td>${place.id}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.2rem;">${place.emoji || '🏛️'}</span>
                        <strong>${place.name}</strong>
                    </div>
                </td>
                <td>${place.district}</td>
                <td>
                    <span class="category-badge category-${place.category}">
                        ${place.category}
                    </span>
                </td>
                <td>
                    ${place.image ? `<img src="${place.image}" alt="${place.name}" class="table-image">` : 'No image'}
                </td>
                <td class="table-actions">
                    <button class="btn btn-sm btn-secondary" onclick="dashboard.editItem('place', ${place.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="dashboard.deleteItem('place', ${place.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }
    // Modal functions
    openAddModal(type) {
        const modal = document.getElementById('modal-overlay');
        const title = document.getElementById('modal-title');
        const formFields = document.getElementById('form-fields');
        
        title.textContent = `Add New ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        
        let fieldsHTML = '';
        
        switch (type) {
            case 'place':
                fieldsHTML = `
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Name *</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>District *</label>
                            <select name="district" required>
                                <option value="">Select District</option>
                                <option value="Rajkot">Rajkot</option>
                                <option value="Junagadh">Junagadh</option>
                                <option value="Jamnagar">Jamnagar</option>
                                <option value="Porbandar">Porbandar</option>
                                <option value="Bhavnagar">Bhavnagar</option>
                                <option value="Amreli">Amreli</option>
                                <option value="Gir Somnath">Gir Somnath</option>
                                <option value="Devbhumi Dwarka">Devbhumi Dwarka</option>
                                <option value="Morbi">Morbi</option>
                                <option value="Surendranagar">Surendranagar</option>
                                <option value="Botad">Botad</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Category *</label>
                            <select name="category" required>
                                <option value="">Select Category</option>
                                <option value="Temple">Temple</option>
                                <option value="Fort">Fort</option>
                                <option value="Museum">Museum</option>
                                <option value="Wildlife">Wildlife</option>
                                <option value="Beach">Beach</option>
                                <option value="Pilgrimage">Pilgrimage</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Emoji</label>
                            <input type="text" name="emoji" placeholder="🏛️">
                        </div>
                        <div class="form-group">
                            <label>Image URL</label>
                            <input type="url" name="image" placeholder="https://...">
                        </div>
                        <div class="form-group">
                            <label>Map Link</label>
                            <input type="url" name="map_link" placeholder="https://maps.google.com/...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Description *</label>
                        <textarea name="description" required rows="4"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Tags (comma-separated)</label>
                        <input type="text" name="tags" placeholder="History, Ancient, Art">
                    </div>
                `;
                break;
                
            case 'gallery':
                fieldsHTML = `
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Image URL *</label>
                            <input type="url" name="src" required placeholder="https://...">
                        </div>
                        <div class="form-group">
                            <label>Caption</label>
                            <input type="text" name="caption" placeholder="Image caption">
                        </div>
                        <div class="form-group">
                            <label>Size</label>
                            <select name="size">
                                <option value="normal">Normal</option>
                                <option value="wide">Wide</option>
                                <option value="tall">Tall</option>
                            </select>
                        </div>
                    </div>
                `;
                break;
                
            case 'fact':
                fieldsHTML = `
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Emoji</label>
                            <input type="text" name="emoji" placeholder="💡">
                        </div>
                        <div class="form-group">
                            <label>Title *</label>
                            <input type="text" name="title" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Fact Text *</label>
                        <textarea name="fact" required rows="4"></textarea>
                    </div>
                `;
                break;
        }
        
        formFields.innerHTML = fieldsHTML;
        modal.dataset.type = type;
        modal.dataset.mode = 'add';
        modal.classList.add('active');
    }

    editItem(type, id) {
        const item = this.data[type + 's'].find(item => item.id === id);
        if (!item) return;
        
        const modal = document.getElementById('modal-overlay');
        const title = document.getElementById('modal-title');
        
        title.textContent = `Edit ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        
        this.openAddModal(type);
        
        // Fill form with existing data
        const form = document.getElementById('modal-form');
        Object.keys(item).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                if (key === 'tags' && Array.isArray(item[key])) {
                    input.value = item[key].join(', ');
                } else {
                    input.value = item[key] || '';
                }
            }
        });
        
        modal.dataset.mode = 'edit';
        modal.dataset.id = id;
    }

    async deleteItem(type, id) {
        const modal = document.getElementById('delete-modal');
        const confirmBtn = document.getElementById('confirm-delete-btn');
        
        modal.classList.add('active');
        
        confirmBtn.onclick = async () => {
            try {
                const response = await fetch(`/api/${type}s/${id}`, {
                    method: 'DELETE'
                });
                
                if (response.ok) {
                    this.showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`, 'success');
                    await this.loadAllData();
                    this.updateStats();
                    this.renderCurrentSection();
                } else {
                    this.showToast('Error deleting item', 'error');
                }
            } catch (error) {
                console.error('Delete error:', error);
                this.showToast('Error deleting item', 'error');
            }
            
            this.closeDeleteModal();
        };
    }

    async handleFormSubmit() {
        const modal = document.getElementById('modal-overlay');
        const form = document.getElementById('modal-form');
        const formData = new FormData(form);
        const type = modal.dataset.type;
        const mode = modal.dataset.mode;
        const id = modal.dataset.id;
        
        const data = {};
        for (let [key, value] of formData.entries()) {
            if (key === 'tags') {
                data[key] = value.split(',').map(tag => tag.trim()).filter(tag => tag);
            } else {
                data[key] = value;
            }
        }
        
        try {
            let response;
            if (mode === 'add') {
                response = await fetch(`/api/${type}s`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            } else {
                response = await fetch(`/api/${type}s/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            }
            
            if (response.ok) {
                this.showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} ${mode === 'add' ? 'added' : 'updated'} successfully`, 'success');
                await this.loadAllData();
                this.updateStats();
                this.renderCurrentSection();
                this.closeModal();
            } else {
                this.showToast('Error saving item', 'error');
            }
        } catch (error) {
            console.error('Save error:', error);
            this.showToast('Error saving item', 'error');
        }
    }

    closeModal() {
        document.getElementById('modal-overlay').classList.remove('active');
    }

    closeDeleteModal() {
        document.getElementById('delete-modal').classList.remove('active');
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const icon = toast.querySelector('.toast-icon');
        const messageEl = toast.querySelector('.toast-message');
        
        toast.className = `toast ${type}`;
        messageEl.textContent = message;
        
        switch (type) {
            case 'success':
                icon.className = 'toast-icon fas fa-check-circle';
                break;
            case 'error':
                icon.className = 'toast-icon fas fa-exclamation-circle';
                break;
            default:
                icon.className = 'toast-icon fas fa-info-circle';
        }
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Global functions for onclick handlers
function openAddModal(type) {
    dashboard.openAddModal(type);
}

function showSection(section) {
    dashboard.showSection(section);
}

function closeModal() {
    dashboard.closeModal();
}

function closeDeleteModal() {
    dashboard.closeDeleteModal();
}

// Initialize dashboard
let dashboard;
document.addEventListener('DOMContentLoaded', () => {
    dashboard = new DashboardManager();
});