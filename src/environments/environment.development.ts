export const environment = {
    api: {
        url: "http://localhost:8080/api/v1/admin/",
        urlCommon: "http://localhost:8080/api/v1/common/",
        category: {
            root: "category",
            new: "category/new",
            update: "category/update",
            delete: "category/delete",
            all: "category/all",
            amount: "category/amount",

            admin: {
                root: 'category',
                update: 'category',
                destroy: 'category',
            },
            common: {
                root: 'category',
                all: 'category/all'
            }
        },
    }
};