import './import/modules';
import './import/components';
import Aos from 'aos';

Aos.init({
  duration: 1000,
  offset: 50, // offset (in px) from the original trigger point
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
});
