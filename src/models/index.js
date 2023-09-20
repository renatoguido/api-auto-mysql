import AutoMobile from'./AutoMobile.js';
import AutoDetails from'./AutoMobileDetails.js';

AutoDetails.belongsTo(AutoMobile,{
    foreignKey:"automobile_id",
});

AutoMobile.hasOne(AutoDetails, {
    foreignKey: "automobile_id",
    },
);

export { AutoMobile, AutoDetails };