export const environment = {
    api: {
        url: "https://lands-be.onrender.com/api/v1/admin/",
        urlCommon: "https://lands-be.onrender.com/api/v1/common/",
        urlProduct: "https://landsbeproductatsha256.onrender.com/api/v1/",
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
        },
        server_be: {
            category: {
                uploadThumb: "category"
            },
            product: {
                uploadThumb: "product"
            }
        },
        server_product: {
            category: {
                create: 'category',
                update: "category_update",
                destroy: "category_delete"
            },
            product: {
                create: "product",
                update: "product_update",
                destroy: "product_delete"
            }
        }
    }
};