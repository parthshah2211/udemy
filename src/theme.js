import { createTheme } from "@mui/material";
import { height } from "@mui/system";

export const theme = createTheme({
 palette: {
      primary: {
        main: '#f5f5f5'
      },
      secondary: {
        main: '#212121'
      }
  },
 components: {
    MuiTypography: {
     variants: [
        {
         props: {
           variant: 'h3',
         },
         style: {
         fontSize: 35,
            color: 'black',
            padding:'8px'
          }
        },
        {
          props: {variant: 'h7'},
          style:{fontSize: 15,
            color: 'grey',
            padding: '8px',
            marginLeft:'5px'
          }
        },
        {
          props: {
            variant: "h4",
          },
          style: {
            fontSize: 19,
     },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
   },
   MuiAppBar: {
     variants: [{
       props: {variant:"appBar"},
       style: {
         height: '85px',
         width: '100%'
     }
     }]
   },
   MuiSvgIcon: {
     variants: [{
       props: { variant: "svgIcon" },
       style: {
         fill:'black'
       }
     }]
   },
    MuiCard: {
     variants: [{
       props: {variant:"outlined"},
       style: {
       marginTop: '-335px',
        marginLeft: '120px',
        width: '28%',
     }
     }]
   },
    MuiStack: {
     variants: [{
       props: {variant:"hedder"},
       style: {
       marginTop: '7px',
        marginLeft: '25px',
         width: '28%',
     }
     }] 
   },
   MuiButton: {
     variants: [{
     props: {variant:'outlined'},
     style: {
       width: '85px',
       fontSize:'11px'
     }
     }] 
   },
   MuiTabs: {
          variants: [{
     props: {variant:'hedderTab'},
     style: {
       marginTop: '32px',
     }
     }] 
   },
   MuiTabs: {
     variants: [{
       props: { variant: 'scrollable' },
       style: {
         marginLeft:'80px'
       }
   }]},
     MuiTab: {
          variants: [{
     props: {variant:'hedderTab'},
     style: {
      fontSize:'15px'
     }
     }] 
   },
  MuiInputBase: {
             variants: [{
     props: {variant:'outlined'},
     style: {
       marginTop: '8px',
       marginLeft: '30px',
       height: '44px',
       fontSize:'15px',
       width:'925px',
       color: 'secondary',
       border: '1px solid black',
       borderRadius: '16px'
     }
     }] 
   },
   MuiBox: {
     variants: [{
       props: { variant: 'outlined' },
       style: {
         marginTop: '-330px',
         height: '50px',
         width: '550px',
         marginLeft: '250px',
       }
    }]
  }
  },
}
);
