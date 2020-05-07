export default {
    getcinemas: () => new Promise(resolve => {
        $.ajax({
            url: "./api/cinemas/postcinemas",
            type: "post",
            success(data) {
                resolve(data);
            }
        })
    }),
}