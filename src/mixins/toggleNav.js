
export default {
  data() {
    return {
      windowWidth: ''
    }
  },
  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    openNav() {
      const width = this.windowWidth > 767 ? '650px' : '300px'
      document.getElementById("mySidenav").style.width = width;
      document.getElementById("main").style.marginRight = width;
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
    },
  },
  mounted() {
    window.addEventListener('resize', this.getWindowWidth);
      //Init
    this.getWindowWidth()
  }
}