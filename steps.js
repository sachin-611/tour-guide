// export const tourSteps = [
//     { zone: 0, text: 'Welcome to the tour! Tap Next to start. 1' },
//     { zone: 1, text: 'This button performs an action. Tap to continue. 2' },
//     { zone: 2, text: 'Here is another feature. Keep going! 3' },
//     { zone: 3, text: 'Here is another feature. Keep going! 4' },
//     { zone: 4, text: 'Here is another feature. Keep going! 5' },
//   ];

  export const tourSteps = {
    HOME:{
        steps:{
            0:{ zone: 0, text: 'Welcome to the tour! Tap Next to start. 1' },
            1:{ zone: 1, text: 'This button performs an action. Tap to continue. 2' },
            2:{ zone: 2, text: 'Here is another feature. Keep going! 3' },
        },
        route:"/home",
        nextModule:"SETTINGS"
    },
    SETTINGS:{
        steps:{
            3:{ zone: 3, text: 'Here is another feature. Keep going! 4' },
            4:{ zone: 4, text: 'Here is another feature. Keep going! 5' },
        },
        route: "/settings",
        prevModule:"HOME"
    }
};
  