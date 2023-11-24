export const Searchbar = () => {
  return `
  <form id="search-form" class="hidden md:hidden w-full max-w-[500px]">
  <div class="relative">
    <input class="border-2 border-secondary-200 focus:border-primary-100 px-3 py-2 w-full focus:outline-none" type="text" id="search" name="search" placeholder="Search" />

    <svg class="absolute right-[12px] top-[8px]" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0475 23.7891L15.1951 16.9367C14.6512 17.3718 14.0258 17.7162 13.3188 17.97C12.6118 18.2238 11.8595 18.3507 11.0619 18.3507C9.08592 18.3507 7.41379 17.6662 6.04549 16.2971C4.67718 14.9281 3.99267 13.256 3.99194 11.2808C3.99194 9.3048 4.67646 7.63267 6.04549 6.26436C7.41452 4.89606 9.08665 4.21154 11.0619 4.21082C13.0378 4.21082 14.71 4.89533 16.0783 6.26436C17.4466 7.63339 18.1311 9.30552 18.1318 11.2808C18.1318 12.0784 18.0049 12.8307 17.7511 13.5377C17.4973 14.2447 17.1529 14.8701 16.7178 15.4139L23.5702 22.2663L22.0475 23.7891ZM11.0619 16.1753C12.4215 16.1753 13.5773 15.6993 14.5294 14.7472C15.4815 13.7951 15.9572 12.6396 15.9565 11.2808C15.9565 9.92115 15.4804 8.76531 14.5283 7.81322C13.5762 6.86114 12.4208 6.38546 11.0619 6.38618C9.70228 6.38618 8.54643 6.86222 7.59435 7.81431C6.64226 8.76639 6.16658 9.92188 6.16731 11.2808C6.16731 12.6404 6.64335 13.7962 7.59544 14.7483C8.54752 15.7004 9.703 16.1761 11.0619 16.1753Z" fill="#096745"/>
</svg>

</div>
    </form>
    
    
    <form id="search-form-desktop" class="hidden md:block w-full max-w-[500px]">
    <div class="relative">
      <input class="border-2 border-secondary-200 focus:border-primary-100 px-3 py-2 w-full focus:outline-none" type="text" id="search" name="search" placeholder="Search" />
  
      <svg class="absolute right-[12px] top-[8px]" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.0475 23.7891L15.1951 16.9367C14.6512 17.3718 14.0258 17.7162 13.3188 17.97C12.6118 18.2238 11.8595 18.3507 11.0619 18.3507C9.08592 18.3507 7.41379 17.6662 6.04549 16.2971C4.67718 14.9281 3.99267 13.256 3.99194 11.2808C3.99194 9.3048 4.67646 7.63267 6.04549 6.26436C7.41452 4.89606 9.08665 4.21154 11.0619 4.21082C13.0378 4.21082 14.71 4.89533 16.0783 6.26436C17.4466 7.63339 18.1311 9.30552 18.1318 11.2808C18.1318 12.0784 18.0049 12.8307 17.7511 13.5377C17.4973 14.2447 17.1529 14.8701 16.7178 15.4139L23.5702 22.2663L22.0475 23.7891ZM11.0619 16.1753C12.4215 16.1753 13.5773 15.6993 14.5294 14.7472C15.4815 13.7951 15.9572 12.6396 15.9565 11.2808C15.9565 9.92115 15.4804 8.76531 14.5283 7.81322C13.5762 6.86114 12.4208 6.38546 11.0619 6.38618C9.70228 6.38618 8.54643 6.86222 7.59435 7.81431C6.64226 8.76639 6.16658 9.92188 6.16731 11.2808C6.16731 12.6404 6.64335 13.7962 7.59544 14.7483C8.54752 15.7004 9.703 16.1761 11.0619 16.1753Z" fill="#096745"/>
  </svg>
  
  </div>
      </form>    
    `;
};
