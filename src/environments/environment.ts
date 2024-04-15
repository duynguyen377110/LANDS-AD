export const environment = {
    api: {
        url: "https://lands-be.onrender.com/api/v1/admin/",
        urlCommon: "https://lands-be.onrender.com/api/v1/common/",
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
                all: 'role/all',
                amount: "role/amount",
            }
        },
        user: {
            admin: {
                root: 'user',
            },
            common: {
                root: 'user',
                all: 'user/all',
                amount: "user/amount",
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
                amount: "product/amount",
            }
        }
    }
};