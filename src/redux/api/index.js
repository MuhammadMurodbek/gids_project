export const baseUrl = "http://165.232.76.226";
// export const baseUrl = "https://gits.uz";
export const headers = {'Content-Type': 'application/json'}
const token = JSON.parse(localStorage.getItem("user_token"))
export const head_token = { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token?.access}`,
    }
}
