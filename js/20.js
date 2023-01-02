const reproductor = {
    reproducir: function(id){
        console.log('Reproduciendo cancion')
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
};

reproductor.borrarCancion = function(id){
    console.log(`Eliminado la cancion: ${id}`)
}
reproductor.reproducir(672);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist(`Bad Bunny`);
reproductor.reproducirPlaylist(`Bad Bunny`);