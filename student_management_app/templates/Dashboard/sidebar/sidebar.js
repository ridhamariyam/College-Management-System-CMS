document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  let isSidebarOpen = false;

  function toggleSidebar() {
    // Only toggle on mobile
    if (window.innerWidth < 768) {
      isSidebarOpen = !isSidebarOpen;

      if (isSidebarOpen) {
        sidebar.style.transform = "translateX(0)";
        backdrop.classList.remove("hidden");
      } else {
        sidebar.style.transform = "translateX(-100%)";
        backdrop.classList.add("hidden");
      }
    }
  }

  // Reset sidebar state on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      sidebar.style.transform = "translateX(0)";
      backdrop.classList.add("hidden");
    } else {
      sidebar.style.transform = "translateX(-100%)";
      isSidebarOpen = false;
    }
  });

  sidebarToggle.addEventListener("click", toggleSidebar);
  backdrop.addEventListener("click", toggleSidebar);
});
