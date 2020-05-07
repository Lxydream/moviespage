//专门传送ajax
export default {
    login: ({ addminName, adminPassword }) => new Promise(resolve => {
        $.ajax({
            url: "./addmin/login",
            type: "post",
            data: {
                addminName,
                adminPassword
            },
            success(data) {
                resolve(data);
            }
        })
    }),
    regist: ({ addminName, adminPassword }) => new Promise(resolve => {
        $.ajax({
            url: "./addmin/regist",
            type: "post",
            data: {
                addminName,
                adminPassword
            },
            success(data) {
                resolve(data);
            }
        })
    })
}