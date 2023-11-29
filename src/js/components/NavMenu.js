export const NavMenu = (name, credits) => {
  return `<div id="nav-menu" class="text-sm hidden bg-white absolute top-[60px] right-0 w-[200px] shadow-md z-20">

  <div class="p-4 flex flex-col gap-3">
  <div>
  <p class="text-secondary-100 text-xs">Logged in as</p>
  <p class="text-primary-400 font-bold text-sm">${name}</p>
  </div>
  <div>
  <p class="text-secondary-100 text-xs">My balance</p>
  <p class="text-primary-400 font-bold text-sm">$${credits}</p>
  </div>
  </div>

  
  <div class="h-[1px] w-full bg-secondary-50"></div>

  <a href="profile.html?user=${name}" class="text-secondary-400 flex gap-2 p-4 hover:bg-neutral-100 transition-all items-center">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7ZM8 13C6.67392 13 5.40215 13.5268 4.46447 14.4645C3.52678 15.4021 3 16.6739 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 16.6739 20.4732 15.4021 19.5355 14.4645C18.5979 13.5268 17.3261 13 16 13H8Z" fill="#263448"/>
  </svg>
  <p>My profile</p>
  </a>  

  <a href="new.html" class="text-secondary-400 flex gap-2 p-4 hover:bg-neutral-100 transition-all items-center">

  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5.75C3 5.02065 3.28973 4.32118 3.80546 3.80546C4.32118 3.28973 5.02065 3 5.75 3H18.25C18.9793 3 19.6788 3.28973 20.1945 3.80546C20.7103 4.32118 21 5.02065 21 5.75V12.022C20.386 11.6285 19.7097 11.3418 19 11.174V5.75C19 5.55109 18.921 5.36032 18.7803 5.21967C18.6397 5.07902 18.4489 5 18.25 5H5.75C5.55109 5 5.36032 5.07902 5.21967 5.21967C5.07902 5.36032 5 5.55109 5 5.75V18.25C5 18.664 5.336 19 5.75 19H11.174C11.344 19.72 11.634 20.395 12.022 21H5.75C5.02065 21 4.32118 20.7103 3.80546 20.1945C3.28973 19.6788 3 18.9793 3 18.25V5.75ZM23 17.5C23 16.0413 22.4205 14.6424 21.3891 13.6109C20.3576 12.5795 18.9587 12 17.5 12C16.0413 12 14.6424 12.5795 13.6109 13.6109C12.5795 14.6424 12 16.0413 12 17.5C12 18.9587 12.5795 20.3576 13.6109 21.3891C14.6424 22.4205 16.0413 23 17.5 23C18.9587 23 20.3576 22.4205 21.3891 21.3891C22.4205 20.3576 23 18.9587 23 17.5ZM18 18L18.001 20.503C18.001 20.6356 17.9483 20.7628 17.8546 20.8566C17.7608 20.9503 17.6336 21.003 17.501 21.003C17.3684 21.003 17.2412 20.9503 17.1474 20.8566C17.0537 20.7628 17.001 20.6356 17.001 20.503V18H14.496C14.3634 18 14.2362 17.9473 14.1424 17.8536C14.0487 17.7598 13.996 17.6326 13.996 17.5C13.996 17.3674 14.0487 17.2402 14.1424 17.1464C14.2362 17.0527 14.3634 17 14.496 17H17V14.5C17 14.3674 17.0527 14.2402 17.1464 14.1464C17.2402 14.0527 17.3674 14 17.5 14C17.6326 14 17.7598 14.0527 17.8536 14.1464C17.9473 14.2402 18 14.3674 18 14.5V17H20.497C20.6296 17 20.7568 17.0527 20.8506 17.1464C20.9443 17.2402 20.997 17.3674 20.997 17.5C20.997 17.6326 20.9443 17.7598 20.8506 17.8536C20.7568 17.9473 20.6296 18 20.497 18H18Z" fill="#263448"/>
</svg>


  <p>Create new listing</p>
  </a>  
  
  <div class="h-[1px] w-full bg-secondary-50"></div>

  <a id="logout-btn" class="cursor-pointer text-secondary-400 flex gap-2 p-4 hover:bg-neutral-100 transition-all items-center">

  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_196_1613)">
<path d="M15.3333 2.66663H4.66668C4.31305 2.66663 3.97392 2.8071 3.72387 3.05715C3.47382 3.3072 3.33334 3.64634 3.33334 3.99996V20C3.33334 20.3536 3.47382 20.6927 3.72387 20.9428C3.97392 21.1928 4.31305 21.3333 4.66668 21.3333H15.3333C15.687 21.3333 16.0261 21.1928 16.2762 20.9428C16.5262 20.6927 16.6667 20.3536 16.6667 20V16H10.42C10.2432 16 10.0736 15.9297 9.94861 15.8047C9.82358 15.6797 9.75334 15.5101 9.75334 15.3333C9.75334 15.1565 9.82358 14.9869 9.94861 14.8619C10.0736 14.7369 10.2432 14.6666 10.42 14.6666H16.6667V3.99996C16.6667 3.64634 16.5262 3.3072 16.2762 3.05715C16.0261 2.8071 15.687 2.66663 15.3333 2.66663Z" fill="#263448"/>
<path d="M18.7733 11.52C18.6458 11.4108 18.4817 11.3538 18.314 11.3602C18.1462 11.3667 17.987 11.4363 17.8683 11.555C17.7496 11.6737 17.68 11.8329 17.6735 12.0007C17.667 12.1685 17.7241 12.3325 17.8333 12.46L20.0867 14.6667H16.6667V16H20.0867L17.8333 18.3067C17.7635 18.3665 17.7069 18.44 17.6668 18.5227C17.6268 18.6054 17.6043 18.6955 17.6008 18.7873C17.5972 18.8792 17.6127 18.9707 17.6462 19.0563C17.6797 19.1418 17.7306 19.2195 17.7956 19.2845C17.8605 19.3494 17.9382 19.4003 18.0238 19.4338C18.1093 19.4673 18.2009 19.4828 18.2927 19.4792C18.3845 19.4757 18.4746 19.4532 18.5573 19.4132C18.64 19.3732 18.7136 19.3165 18.7733 19.2467L22.6667 15.38L18.7733 11.52Z" fill="#263448"/>
</g>
<defs>
<clipPath id="clip0_196_1613">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>



  <p>Log out</p>
  </a> 

  </div>`;
};
