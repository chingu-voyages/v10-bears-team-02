let def = {
    varieties: [],
    sub_species: [],
    scientific_name: 'Rosmarinus',
    order:
    { slug: 'lamiales',
        name: 'Lamiales',
        link: 'http://trefle.io/api/division_orders/13',
        id: 13 },
    native_status: 'L48(I)',
    main_species:
    { year: null,
        type: 'species',
        synonym: false,
        status: 'Unknown',
        specifications: {
            toxicity: null,
            shape_and_orientation: null,
            regrowth_rate: null,
            nitrogen_fixation: null,
            max_height_at_base_age: [Object],
            mature_height: [Object],
            low_growing_grass: null,
            lifespan: null,
            leaf_retention: null,
            known_allelopath: null,
            growth_rate: null,
            growth_period: null,
            growth_habit: null,
            growth_form: null,
            fire_resistance: null,
            fall_conspicuous: null,
            coppice_potential: null,
            c_n_ratio: null,
            bloat: null },
        sources: [ [Object] ],
        soils_adaptation: { medium: null, fine: null, coarse: null },
        slug: 'rosmarinus',
        seed:
        { vegetative_spread_rate: null,
            small_grain: null,
            seeds_per_pound: null,
            seedling_vigor: null,
            seed_spread_rate: null,
            commercial_availability: null,
            bloom_period: null },
        scientific_name: 'Rosmarinus',
        propagation:
        { tubers: null,
            sprigs: null,
            sod: null,
            seed: null,
            cuttings: null,
            corms: null,
            container: null,
            bulbs: null,
            bare_root: null },
        products:
        { veneer: null,
            pulpwood: null,
            protein_potential: null,
            post: null,
            palatable_human: null,
            palatable_graze_animal: null,
            palatable_browse_animal: null,
            nursery_stock: null,
            naval_store: null,
            lumber: null,
            fuelwood: null,
            fodder: null,
            christmas_tree: null,
            berry_nut_seed: null },
        native_status: 'L48(I)',
        main_species_id: null,
        is_main_species: true,
        images: [Object],
        id: 175919,
        growth:
        { temperature_minimum: [Object],
            shade_tolerance: null,
            salinity_tolerance: null,
            root_depth_minimum: [Object],
            resprout_ability: null,
            precipitation_minimum: [Object],
            precipitation_maximum: [Object],
            planting_density_minimum: [Object],
            planting_density_maximum: [Object],
            ph_minimum: null,
            ph_maximum: null,
            moisture_use: null,
            hedge_tolerance: null,
            frost_free_days_minimum: null,
            fire_tolerance: null,
            fertility_requirement: null,
            drought_tolerance: null,
            cold_stratification_required: null,
            caco_3_tolerance: null,
            anaerobic_tolerance: null },
        fruit_or_seed:
        { seed_persistence: null,
            seed_period_end: null,
            seed_period_begin: null,
            seed_abundance: null,
            conspicuous: null,
            color: null },
        foliage:
        { texture: null,
            porosity_winter: null,
            porosity_summer: null,
            color: null },
        flower: { conspicuous: null, color: null },
        family_common_name: 'Mint family',
        duration: null,
        complete_data: false,
        common_name: 'rosemary',
        bibliography: null,
        author: null },
    images:
    [ { url:
            'https://upload.wikimedia.org/wikipedia/commons/3/35/Rosemary_%28390002797%29.jpg' } ],
    id: 175919,
    hybrids: [],
    genus:
    { slug: 'rosmarinus',
        name: 'Rosmarinus',
        link: 'http://trefle.io/api/genuses/5916',
        id: 5916 },
    forms: [],
    family_common_name: 'Mint family',
    family:
    { slug: 'lamiaceae',
        name: 'Lamiaceae',
        link: 'http://trefle.io/api/families/15',
        id: 15,
        common_name: 'Mint family' },
    duration: null,
    division:
    { slug: 'magnoliophyta',
        name: 'Magnoliophyta',
        link: 'http://trefle.io/api/divisions/1',
        id: 1 },
    cultivars: [],
    common_name: 'rosemary',
    class:
    { slug: 'magnoliopsida',
        name: 'Magnoliopsida',
        link: 'http://trefle.io/api/division_classes/1',
        id: 1
    }
}


//----------------------------------------------------------------------------------------------------------------------------


/**
 * when *
 * how far apart 
 * how deep to plant * 
 * days to sprout
 * days to harvest
 * shade tolerance * 
 * 
 */




/**
 * Returns a consolidated plant object
 * @param {*} oldObject Original Trefle API object for a specific plant
 */
function formatPlant(oldObject) { 
    let final = {
    
        names: {
            "common_name": oldObject.common_name,
            "family_common_name": "string",
            "scientific_name": oldObject.scientific_name,
        },     
        
        growth: {		
    
            "container_friendly" : "Boolean",
            "temperature_minimum": {
                deg_f: "40", 
                deg_c: "8"
            }, // 
            "shade_tolerance": "string", //
            "root_depth_minimum": {
                inches: "3.5",
                cm: "10"
            }, // 
            "precipitation_minimum": {}, //
            "precipitation_maximum": {}, // 
            "planting_density_minimum": {}, // 
            "planting_density_maximum": {}, // 
                    
            "growth_rate": "medium",  //
            "growth_period": "string",  //
            "growth_habit": "string",  
            "growth_form": "string", 
            "regrowth_rate": "string", //	
            "c_n_ratio": "string",
                  
            "lifespan": "string",
            "resprout_ability": "string",
            "salinity_tolerance": "string",
    
            "ph_minimum": "float", 
            "ph_maximum": "float", 
            "frost_free_days_minimum": "float", 
            "drought_tolerance": "string",
            
            "duration": "string", // perennial    
            
            mature_height: {
                "ft": "float",
                "cm": "float"
            },
            
            fruit_or_seed: {
                "seed_persistence": "string",
                "seed_period_end": "string",
                "seed_period_begin": "string",
                "seed_abundance": "string",			
            },        
        },
    
        appearance: {
            "foliage": {
                "color": "string"
            },
            
            "flower": {	
                "color": "string"
            },
            
            "seed":{
                "color": "string"
            }
        },
        
        other: {
            "toxicity": "string",	                            
        },

        meta: {
            id: oldObject.id, 
            image_urls: oldObject.images
        }
    }

    return final

}

module.exports = {
    formatPlant
}

