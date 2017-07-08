module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-responsive-images');
  
  grunt.initConfig({
  responsive_images: {
    myTask: {
      options: {
        sizes: [{
          width: 320,
        },{
          width: 640,
        },{
          width: 1024,
        }]
      },
      files: [{
        expand: true,
        src: ['**.{jpg,gif,png}'],
        cwd: 'images/',
        custom_dest: 'new/{%= width %}/'
      }]
    }
  },
})


  };