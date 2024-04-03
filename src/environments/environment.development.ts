export const environment = {
    api: {
        url: "http://localhost:8083/api/v1/admin/",
        urlCommon: "http://localhost:8083/api/v1/common/",
        urlProduct: "http://localhost:8082/api/v1/",
        access: {
            signin: 'access/signin',
            signout: 'access/signout'
        },
        role: {
            admin: {
                root: 'role'
            },
            common: {
                root: 'role',
                all: 'role/all'
            }
        },
        user: {
            admin: {
                root: 'user',
            },
            common: {
                root: 'user',
                all: 'user/all'
            }
        },
        category: {
            admin: {
                root: 'category',
                updateCategory: 'category_update',
                destroyCategory: 'category_delete',
                destroyCategoryThumbs: 'category'
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