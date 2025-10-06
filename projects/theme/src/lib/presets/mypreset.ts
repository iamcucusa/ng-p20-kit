import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:'#E3F2FD',100:'#BBDEFB',200:'#90CAF9',300:'#64B5F6',400:'#42A5F5',
      500:'#2196F3',600:'#1E88E5',700:'#1976D2',800:'#1565C0',900:'#0D47A1'
    },
    colorScheme: { light: { primary: { color:'#2196F3', inverseColor:'#ffffff' } } },
    focusRing: { width:'0.2rem', style:'solid', color:'#a6d5fa', offset:'0' }
  }
});
export default MyPreset;
