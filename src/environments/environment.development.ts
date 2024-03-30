export const environment = {
    api: {
        url: "http://localhost:8080/api/v1/admin/",
        urlCommon: "http://localhost:8080/api/v1/common/",
        role: {
            admin: {
                root: 'role'
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