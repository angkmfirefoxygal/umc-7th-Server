export const bodyToUser = (body) => {
  const birth = new Date(body.birth);

  return {
    email: body.email,
    name: body.name,
    gender: body.gender,
    birth,
    address: body.address || "",
    detailAddress: body.detailAddress || "",
    phoneNumber: body.phoneNumber,
    preferences: body.preferences,
  };
};

export const responseFromUser = ({ user, preferences }) => {
  // Assumes `user` is an array with a single user object from getUser function.
  const userInfo = user[0];

  return {
    id: userInfo.id,
    email: userInfo.email,
    name: userInfo.name,
    gender: userInfo.gender,
    birth: userInfo.birth,
    address: userInfo.address,
    detailAddress: userInfo.detail_address,
    phoneNumber: userInfo.phone_number,
    preferences: preferences.map(pref => ({
      id: pref.id,
      foodCategoryId: pref.food_category_id,
      categoryName: pref.name,
    })),
  };
};