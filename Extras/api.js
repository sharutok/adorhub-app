const VITE_BACKEND_URL = "http://localhost"
const VITE_BACKEND_PORT = "8000"

const url = VITE_BACKEND_URL
const port = VITE_BACKEND_PORT

let link = `${url}:${port}`

link = 'https://1eaf-113-193-63-226.ngrok-free.app'

export const api = {
    user_management: {
        get_data: `${link}/user-manage/all`,
        get_data_id: `${link}/user-manage`,
        post_data: `${link}/user-manage/create/`,
        reset_password: `${link}/user-manage/reset/password`
    },
    yammer: {
        get_data: `${link}/yammer-feeds/posts/`
    },
    capex: {
        get_budget_data: `${link}/capex/get-all-budget-data`,
        get_capex_data: `${link}/capex/get-all-capex-data`,
        budget_by_id: `${link}/capex/data-budget`,
        capex_by_id: `${link}/capex/data-capex`,
        create_capex: `${link}/capex/create/`,
        upload_budget_excel: `${link}/capex/read-data-excel/`,
        update_capex_only: `${link}/capex/update/only/`
    },
    conference_booking: {
        get_data: `${link}/conf-book/all`,
        create: `${link}/conf-book/create/`,
        get_by_date_and_conf_room: `${link}/conf-book/by/date/conf-room/`,
        post_data: `${link}/conf-book/create/`,
        by_id: `${link}/conf-book/`
    },
    ticket_system: {
        get_data: `${link}/tkt-sys/all`,
        view_all_data: `${link}/tkt-sys/view/all`,
        create: `${link}/tkt-sys/create/`,
        by_id: `${link}/tkt-sys/`,
        get_all_user_list: `${link}/tkt-sys/get-all-users/`
    },
    dynamic_values: {
        tkt_type: `${link}/tkt-sys/tkt_type/`,
        requirement_type: `${link}/tkt-sys/req_type/`,
        conference_rooms: `${link}/conf-book/conference-rooms`
    },
    visitor_management: {
        create: `${link}/visitor-manage/create/`,
        get_data: `${link}/visitor-manage/all`,
        by_id: `${link}/visitor-manage/`,
        save_image: `${link}/visitor-manage/save/img/`,
        get_image: `${link}/visitor-manage/get/img`,
        punch: `${link}/visitor-manage/punch`,
        list_access: `${link}/visitor-manage/list/access`,

    },
    user: {
        log_check: `${link}/user-manage/login/check/`,
        birthday_list: `${link}/user-manage/birthday/list/`,
        user_permissions: `${link}/user-manage/user/permission/list/`,
        manager_list: `${link}/user-manage/list/manager`
    },
    utils: {
        download_excel: `${link}/utils/download/excel/`,
        weather_temp: `${link}/utils/get/weather/temp/`,
        serve_files: `${link}/utils/serve/file/`,
        announcements: `${link}/utils/add/announsment/`,
        dept_plant: `${link}/utils/list/dept-plant/`,
        birthday_wish: `${link}/utils/birthday/wish`,
        which_frame: `${link}/utils/which/frame`
    },
    wf: {
        it_system_ticket_wf: `${link}/wf/ticket/systems/`,
        it_infra_ticket_wf: `${link}/wf/ticket/infra/`,
        capex_wf_corporate: `${link}/wf/capex/corporate/`,
        capex_wf_plant: `${link}/wf/capex/plant/`,
    },
    policies: {
        get_all_data: `${link}/policy/get-all-data`,
        create_data: `${link}/policy/post/`,
    }
}





















