export default async (to, from, next) => {
    console.log(from.name, '에서', to.name, '으로 이동');
    return next();
};
