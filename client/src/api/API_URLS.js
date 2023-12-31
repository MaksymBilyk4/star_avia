export const PAYMENT_BASE_URL = "/payments";
export const CLIENT_BASE_URL = "/clients";
export const PASSPORT_BASE_URL = "/passports";
export const ORDERS_BASE_URL = "/orders";
export const ORDER_TYPES_BASE_URL = "/orderTypes";
export const TOUR_OPERATORS_BASE_URL = "/operators";
export const NOTES_BASE_URL = "/notes";
export const API_URLS = {
    MAPPING: {
        findAll: (entity) => `${entity}/all`,
        create: (entity) => `${entity}`,
        deleteById: (entity, id) => `${entity}/${id}`,
        update: (entity, id) => `${entity}/${id}`,
        findById: (entity, id) => `${entity}/${id}`
    },
    PAYMENTS: {
        updateBalance: () => `${PAYMENT_BASE_URL}/updateBalance`
    },
    NOTES: {
        findAllExpiredNotes: () => `${NOTES_BASE_URL}/expired`,
        findAllCompletedNotes: () => `${NOTES_BASE_URL}/completed`,
        findNotCompletedAndNotExpiredNotes: () => `${NOTES_BASE_URL}/notCompletedAndNotExpired`,
        completeNote: (id) => `${NOTES_BASE_URL}/complete?id=${id}`
    }
}