export interface SpaceInterface {
    mission_name: string,
    launch_date_local: string,
    launch_site: SpaceInterfaceSite,
    links: SpaceInterfaceLinks,
    rocket: {
        rocket_name: string,
        first_stage: {
            flight: number
            core: SpaceCore
        },
        second_stage: {
            payloads: SpacePayloads[]
        }

    }
}

interface SpaceInterfaceSite {
    site_name_long: string
}

interface SpaceInterfaceLinks {
    article_link: null,
    video_link: string
}

interface SpaceCore {
    reuse_count: number,
    status: string
}
interface SpacePayloads {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

const space: SpaceInterface = {
    mission_name: "Starlink-15 (v1.0)",
    launch_date_local: "2020-10-24T11:31:00-04:00",
    launch_site: {site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"},
    links: {
        article_link: null,
        video_link: "https://youtu.be/J442-ti-Dhg"
    },
    rocket: {
        rocket_name: "Falcon 9",
        first_stage: {
            core: {
                reuse_count: 7,
                status: "unknown"
            },
            flight: 7
        },
        second_stage: {
            payloads: [
                {
                    payload_type: "Satellite",
                    payload_mass_kg: 15400,
                    payload_mass_lbs: 33951.2
                }
            ]
        }
    },

}
console.log(space)
for (let item of space.rocket.second_stage.payloads) {
    console.log(item)
}


