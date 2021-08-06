import { from } from "form-data";
import {refs, theme} from './refs';

function onChangeTheme  () {

    const themeChecked = refs.switch.checked;
    if (themeChecked) {
        refs.body.classList.add(theme.DARK);
        refs.body.classList.remove(theme.LIGHT);
        localStorage.setItem('theme', theme.DARK);
    } else {
        refs.body.classList.add(theme.LIGHT);
        refs.body.classList.remove(theme.DARK);
        localStorage.setItem('theme', theme.LIGHT);
    }
};

function onCheckboxChecked () {

if (localStorage.getItem('theme') === theme.DARK) {
    refs.body.classList.add(theme.DARK);
refs.switch.checked = true;
}
};

refs.switch.addEventListener('change', onChangeTheme);
onCheckboxChecked();