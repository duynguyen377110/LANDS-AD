export const environment = {
    api: {
        url: "https://lands-be.onrender.com/api/v1/admin/",
        urlCommon: "https://lands-be.onrender.com/api/v1/common/",
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
                destroy: 'category'
            },
            common: {
                root: 'category',
                all: 'category/all'
            }
        },
    }
};