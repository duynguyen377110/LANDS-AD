export const environment = {
    api: {
        url: "http://localhost:8080/api/v1/admin/",
        urlCommon: "http://localhost:8080/api/v1/common/",
        category: {
            admin: {
                root: 'category',
            },
            common: {
                root: 'category',
                all: 'category/all',
                amount: "category/amount",
            }
        },
    }
};