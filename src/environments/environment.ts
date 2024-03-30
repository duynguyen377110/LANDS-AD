export const environment = {
    api: {
        url: "https://lands-be.onrender.com/api/v1/admin/",
        urlCommon: "https://lands-be.onrender.com/api/v1/common/",
        role: {
            admin: {
                root: 'role'
            },
            common: {
                root: 'role/all'
            }
        },
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
        product: {
            admin: {
                root: 'product'
            },
            common: {
                root: 'product',
                all: 'product/all',
            }
        }
    }
};