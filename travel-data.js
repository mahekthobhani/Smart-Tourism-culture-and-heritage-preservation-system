/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TRAVEL ROUTES DATA                                      ║
  ║  Transportation options and costs for Saurashtra         ║
  ╚══════════════════════════════════════════════════════════╝
  
  WHAT IS THIS FILE?
  ──────────────────
  This file contains travel information between major cities
  in Saurashtra including:
  - Distance between cities
  - Available transport options (Bus, Train, Flight, Car)
  - Estimated costs per person
  - Travel duration
  - Helpful tips for travelers
  
  COST EXPLANATION:
  ─────────────────
  All costs are in Indian Rupees (₹) and are APPROXIMATE.
  Actual costs may vary based on:
  - Season (peak/off-peak)
  - Booking time (advance/last minute)
  - Class of travel (economy/premium)
  - Fuel prices (for car/taxi)
*/

const TRAVEL_ROUTES = {
    
    // ══════════════════════════════════════════════════════════
    // RAJKOT ROUTES
    // ══════════════════════════════════════════════════════════
    
    'Rajkot-Junagadh': {
        distance: 102,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '2-2.5 hours',
                costPerPerson: 1200,
                description: 'Most comfortable, door-to-door service',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '2.5-3 hours',
                costPerPerson: 150,
                description: 'Economical, frequent services',
                frequency: 'Every 30 minutes'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '2-3 hours',
                costPerPerson: 100,
                description: 'Comfortable and scenic journey',
                frequency: '4-5 trains daily'
            },
            {
                name: 'Shared Taxi',
                icon: '🚕',
                duration: '2 hours',
                costPerPerson: 300,
                description: 'Faster than bus, cheaper than private car'
            }
        ],
        tips: [
            'NH 27 is well-maintained, smooth drive',
            'Early morning trains offer best views',
            'Book GSRTC Volvo for more comfort (₹250)',
            'Shared taxis leave from ST Bus Stand'
        ]
    },

    'Rajkot-Jamnagar': {
        distance: 92,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '1.5-2 hours',
                costPerPerson: 1000,
                description: 'Quick and comfortable',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '2-2.5 hours',
                costPerPerson: 120,
                description: 'Frequent and affordable',
                frequency: 'Every 20 minutes'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '2 hours',
                costPerPerson: 80,
                description: 'Comfortable rail journey',
                frequency: '6-8 trains daily'
            }
        ],
        tips: [
            'NH 8D is excellent highway',
            'Jamnagar has good local transport',
            'Book train tickets in advance during festivals',
            'Buses run until late night'
        ]
    },

    'Rajkot-Porbandar': {
        distance: 175,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '3-3.5 hours',
                costPerPerson: 2000,
                description: 'Comfortable coastal drive',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '4 hours',
                costPerPerson: 200,
                description: 'Direct bus service available',
                frequency: 'Every hour'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '3.5-4 hours',
                costPerPerson: 150,
                description: 'Scenic coastal route',
                frequency: '3-4 trains daily'
            }
        ],
        tips: [
            'Visit Kirti Mandir (Gandhi birthplace) in Porbandar',
            'Coastal route offers beautiful sea views',
            'Try local seafood in Porbandar',
            'Book accommodation in advance'
        ]
    },

    'Rajkot-Bhavnagar': {
        distance: 165,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '3 hours',
                costPerPerson: 1800,
                description: 'Direct and comfortable',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '3.5-4 hours',
                costPerPerson: 180,
                description: 'Regular service available',
                frequency: 'Every 45 minutes'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '3-4 hours',
                costPerPerson: 120,
                description: 'Comfortable journey',
                frequency: '4-5 trains daily'
            }
        ],
        tips: [
            'Bhavnagar is gateway to Palitana temples',
            'Good food options on the highway',
            'Velavadar Blackbuck Park nearby',
            'City has good hotels and restaurants'
        ]
    },

    'Rajkot-Gir Somnath': {
        distance: 165,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '3-3.5 hours',
                costPerPerson: 2000,
                description: 'Best for Gir safari and Somnath visit',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '4-4.5 hours',
                costPerPerson: 200,
                description: 'Direct buses to Veraval/Somnath',
                frequency: 'Every 2 hours'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '4-5 hours',
                costPerPerson: 150,
                description: 'Train to Veraval station',
                frequency: '2-3 trains daily'
            }
        ],
        tips: [
            'Book Gir safari in advance online',
            'Somnath Temple visit is free',
            'Stay near Somnath for evening aarti',
            'Try local Gujarati thali'
        ]
    },

    'Rajkot-Devbhumi Dwarka': {
        distance: 235,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '4-5 hours',
                costPerPerson: 2800,
                description: 'Long but comfortable journey',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '5-6 hours',
                costPerPerson: 280,
                description: 'Overnight buses available',
                frequency: 'Every 3 hours'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '5-6 hours',
                costPerPerson: 200,
                description: 'Comfortable rail journey',
                frequency: '3-4 trains daily'
            }
        ],
        tips: [
            'Start early morning to reach by noon',
            'Dwarka temple has strict dress code',
            'Visit Bet Dwarka island (boat ride)',
            'Many dharamshalas available for stay'
        ]
    },


    // ══════════════════════════════════════════════════════════
    // AHMEDABAD ROUTES (Major Gateway)
    // ══════════════════════════════════════════════════════════
    
    'Ahmedabad-Rajkot': {
        distance: 220,
        options: [
            {
                name: 'Flight',
                icon: '✈️',
                duration: '45 minutes',
                costPerPerson: 3500,
                description: 'Fastest option, daily flights',
                frequency: '2-3 flights daily',
                recommended: true
            },
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '4-4.5 hours',
                costPerPerson: 2500,
                description: 'Comfortable highway drive'
            },
            {
                name: 'Bus (GSRTC Volvo)',
                icon: '🚌',
                duration: '4.5-5 hours',
                costPerPerson: 400,
                description: 'Luxury AC bus service',
                frequency: 'Every hour'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '4-5 hours',
                costPerPerson: 250,
                description: 'Multiple train options',
                frequency: '10+ trains daily'
            }
        ],
        tips: [
            'NH 47 is excellent 4-lane highway',
            'Book flights 2-3 weeks in advance for best prices',
            'Shatabdi Express is fastest train (4 hours)',
            'Volvo buses are very comfortable'
        ]
    },

    'Ahmedabad-Junagadh': {
        distance: 325,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '5.5-6 hours',
                costPerPerson: 3500,
                description: 'Direct highway route',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '6-7 hours',
                costPerPerson: 450,
                description: 'Overnight buses available',
                frequency: 'Every 2 hours'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '6-7 hours',
                costPerPerson: 300,
                description: 'Comfortable journey',
                frequency: '4-5 trains daily'
            }
        ],
        tips: [
            'Break journey at Rajkot if needed',
            'Overnight buses save hotel cost',
            'Junagadh has many budget hotels',
            'Visit Uparkot Fort and Girnar'
        ]
    },

    'Ahmedabad-Bhavnagar': {
        distance: 180,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '3-3.5 hours',
                costPerPerson: 2000,
                description: 'Quick and comfortable',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '4 hours',
                costPerPerson: 250,
                description: 'Frequent service',
                frequency: 'Every 30 minutes'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '4-5 hours',
                costPerPerson: 180,
                description: 'Several trains available',
                frequency: '6-8 trains daily'
            }
        ],
        tips: [
            'Good highway connectivity',
            'Bhavnagar has airport (limited flights)',
            'Gateway to Palitana and Velavadar',
            'Good seafood restaurants in city'
        ]
    },

    // ══════════════════════════════════════════════════════════
    // JUNAGADH ROUTES
    // ══════════════════════════════════════════════════════════
    
    'Junagadh-Gir Somnath': {
        distance: 85,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '1.5-2 hours',
                costPerPerson: 1000,
                description: 'Best for visiting both Gir and Somnath',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '2-2.5 hours',
                costPerPerson: 100,
                description: 'Regular bus service',
                frequency: 'Every hour'
            },
            {
                name: 'Shared Taxi',
                icon: '🚕',
                duration: '1.5 hours',
                costPerPerson: 250,
                description: 'Faster and affordable'
            }
        ],
        tips: [
            'Combine Gir safari with Somnath visit',
            'Book safari permits in advance',
            'Road passes through Gir forest',
            'Watch for wildlife on the road'
        ]
    },

    'Junagadh-Porbandar': {
        distance: 115,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '2-2.5 hours',
                costPerPerson: 1300,
                description: 'Coastal route, scenic drive',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '3 hours',
                costPerPerson: 130,
                description: 'Direct bus available',
                frequency: 'Every 2 hours'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '2.5-3 hours',
                costPerPerson: 100,
                description: 'Comfortable journey',
                frequency: '2-3 trains daily'
            }
        ],
        tips: [
            'Visit Gandhi birthplace in Porbandar',
            'Beautiful coastal views',
            'Try fresh seafood',
            'Porbandar beach is peaceful'
        ]
    },

    // ══════════════════════════════════════════════════════════
    // JAMNAGAR ROUTES
    // ══════════════════════════════════════════════════════════
    
    'Jamnagar-Devbhumi Dwarka': {
        distance: 145,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '2.5-3 hours',
                costPerPerson: 1600,
                description: 'Most convenient option',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '3-3.5 hours',
                costPerPerson: 150,
                description: 'Regular service available',
                frequency: 'Every hour'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '3-4 hours',
                costPerPerson: 120,
                description: 'Comfortable rail journey',
                frequency: '4-5 trains daily'
            }
        ],
        tips: [
            'Visit Marine National Park in Jamnagar',
            'Dwarka is major pilgrimage site',
            'Book accommodation in advance',
            'Try local Gujarati food'
        ]
    },

    'Jamnagar-Porbandar': {
        distance: 125,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '2-2.5 hours',
                costPerPerson: 1400,
                description: 'Coastal highway drive',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '2.5-3 hours',
                costPerPerson: 140,
                description: 'Frequent buses',
                frequency: 'Every hour'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '2.5 hours',
                costPerPerson: 110,
                description: 'Scenic coastal route',
                frequency: '3-4 trains daily'
            }
        ],
        tips: [
            'Beautiful coastal scenery',
            'Stop at small fishing villages',
            'Fresh seafood available',
            'Porbandar is birthplace of Gandhi'
        ]
    },

    // ══════════════════════════════════════════════════════════
    // BHAVNAGAR ROUTES
    // ══════════════════════════════════════════════════════════
    
    'Bhavnagar-Gir Somnath': {
        distance: 210,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '4-4.5 hours',
                costPerPerson: 2400,
                description: 'Direct route via Amreli',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '5-5.5 hours',
                costPerPerson: 250,
                description: 'Via Amreli or Junagadh',
                frequency: 'Every 3 hours'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '5-6 hours',
                costPerPerson: 180,
                description: 'Change at Junagadh',
                frequency: '2-3 trains daily'
            }
        ],
        tips: [
            'Long journey, start early',
            'Visit Palitana temples from Bhavnagar',
            'Velavadar Blackbuck Park on the way',
            'Carry snacks and water'
        ]
    },

    // ══════════════════════════════════════════════════════════
    // SPECIAL ROUTES
    // ══════════════════════════════════════════════════════════
    
    'Rajkot-Morbi': {
        distance: 72,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '1.5 hours',
                costPerPerson: 800,
                description: 'Quick trip to tile city',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '2 hours',
                costPerPerson: 80,
                description: 'Frequent service',
                frequency: 'Every 30 minutes'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '1.5-2 hours',
                costPerPerson: 60,
                description: 'Regular trains',
                frequency: '6-8 trains daily'
            }
        ],
        tips: [
            'Morbi is famous for ceramic tiles',
            'Visit Mani Mandir Palace',
            'Good for day trip from Rajkot',
            'Try local snacks'
        ]
    },

    'Rajkot-Surendranagar': {
        distance: 85,
        options: [
            {
                name: 'Private Car/Taxi',
                icon: '🚗',
                duration: '1.5-2 hours',
                costPerPerson: 1000,
                description: 'Comfortable highway drive',
                recommended: true
            },
            {
                name: 'Bus (GSRTC)',
                icon: '🚌',
                duration: '2-2.5 hours',
                costPerPerson: 100,
                description: 'Regular service',
                frequency: 'Every hour'
            },
            {
                name: 'Train',
                icon: '🚂',
                duration: '2 hours',
                costPerPerson: 80,
                description: 'Multiple trains',
                frequency: '8-10 trains daily'
            }
        ],
        tips: [
            'Famous for Tarnetar Fair (August)',
            'Wadhwan stepwell nearby',
            'Good connectivity to other cities',
            'Budget-friendly accommodation'
        ]
    }
};
