AFRAME.registerComponent('mycomponent', {

    events: {
        click: function (e) {
            var objectId = e.target.getAttribute('id');
            this.mudaCena(objectId);
            console.log(objectId);
        }
    },

    mudaCena: function (objectId) {

        // var paredeAsset = document.querySelectorAll('.parede');
        // var chaoAsset = document.querySelectorAll('.chao');
        // var tetoAsset = document.querySelectorAll('.teto');
        var skyAsset = document.querySelectorAll('.sky');

        // console.log(document.body.innerHTML)

        switch (objectId) {
            case 'espaco':
                console.log('Clicou em Espaco');

                // paredeAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "../images/espaco.jpg");
                // });

                // tetoAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/481229372/pt/foto/gal%C3%A1xia-espiral-ilustra%C3%A7%C3%A3o-da-via-l%C3%A1ctea.jpg?s=612x612&w=0&k=20&c=0StkiXaTNQ1Xrk6J3vJHNhaq1jG6J9ofLfLP2Yxn10M=")
                // });

                // chaoAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/1371476360/pt/foto/planet-earth-globe-view-from-space.jpg?s=612x612&w=0&k=20&c=V1uK8nxs1jvOZhLLaYnaRqZ-8_JuAVJXNimf1R_sYfg=")
                // });

                skyAsset.forEach(function (elemento){
                    elemento.setAttribute('src', '../images/espaco.jpg')
                })

                break;

            case 'mar':
                console.log('Clicou em Mar');

                // paredeAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/470690382/pt/foto/mundo-subaqu%C3%A1tico-de-corais-e-peixes-tropicais.jpg?s=612x612&w=0&k=20&c=D-KmHEIjnULB8WKssIDpKkqOXlUjJbxv1hCIHWMGVf0=");
                // });

                // tetoAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/873965514/pt/foto/robot-inspects-a-sunken-ship-deep-under-water.jpg?s=612x612&w=0&k=20&c=f2r4u9woMdZZa7fHZyN8dWUSAaSHXMoNw98q1Zhkr-o=")
                // });

                // chaoAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/467528832/pt/foto/the-rocky-litoral-e-pedras-na-%C3%A1gua.jpg?s=612x612&w=0&k=20&c=WwaqhJGKuQKgxWw5XOoXMXhoeyHTyucSfdhu9v3HUoc=")
                // });

                skyAsset.forEach(function (elemento){
                    elemento.setAttribute('src', '../images/mar.jpeg')
                })


                break;

            case 'montanha':
                console.log('Clicou em Montanha');

                // paredeAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/478627080/pt/foto/noite-vista-da-montanha-ama-dablam.jpg?s=612x612&w=0&k=20&c=eg8Fw-8dp5oxujA4VcYwUPdeUiUG_ie0ai1QGuCyqKU=");
                // });

                // tetoAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/1397030090/pt/foto/colorful-pastel-sky-with-clouds-at-beautiful-sunset-as-natural-background.jpg?s=612x612&w=0&k=20&c=ZuHFd2Vw6NwM0auIuUhBCwPpdHCi7BQNdg3_0Gsjvqg=")
                // });

                // chaoAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/1289863152/pt/foto/white-snow-texture.jpg?s=612x612&w=0&k=20&c=vqnk8vD93dU8bnERu1qAvfsOA3DXavYHxLIUjDOiFZE=")
                // });

                skyAsset.forEach(function (elemento){
                    elemento.setAttribute('src', '../images/montanha.jpeg')
                })

                break;

            case 'floresta':
                console.log('Clicou em Floresta');

                // paredeAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "../images/floresta.jpg");
                // });

                // tetoAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://media.istockphoto.com/id/1317323736/pt/foto/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=u92MeBnlqTibkSDqZh8J6k5ilRwS0AK9xAYqpO2gf8k=")
                // });

                // chaoAsset.forEach(function (elemento) {
                //     elemento.setAttribute("src", "https://st.depositphotos.com/2577341/3866/i/950/depositphotos_38662205-stock-photo-grass-texture.jpg")
                // });

                skyAsset.forEach(function (elemento){
                    elemento.setAttribute('src', '../images/froresta360.jpeg')
                })

                break;
        }

    }
});