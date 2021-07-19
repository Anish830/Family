var images = ["https://www.lifewire.com/thmb/X46F1PuWJuhGdwkhM8UlU5GxUnE=/1372x1800/filters:fill(auto,1)/Simpsons_09_Homer_V2F_hires1-56e1eccc5f9b5854a9f89a63.jpg","https://media.npr.org/assets/img/2013/05/07/ap0908140151727_vert-06dfa531201681c1ebe2d126471494fdeb5048ae-s800-c85.jpg", "https://passion-stickers.com/2051-large_default/bart-simpson-decals.jpg" , "https://www.clipartkey.com/mpngs/m/152-1526843_lisa-simpson-lisa-simpson-transparent-background.png",];
            var names = ["Family Book", "Anish Dubba(Me)","Ravi Dubba(Dad)", "Supriya Dubba(Mom)", "Anjana Dubba(Sister) ",];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 4
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }


