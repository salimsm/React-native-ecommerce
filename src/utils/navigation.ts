
export const goToNextScreen = (navigation:any,screenName:string) => {
  navigation.navigate(screenName);
};

export const goBack = (navigation:any) => {
  navigation.goBack();
};
