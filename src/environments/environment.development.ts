export const environment = {
    api: {
        url: "http://localhost:8080/api/v1/admin/",
        urlCommon: "http://localhost:8080/api/v1/common/",
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