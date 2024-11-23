
import Image from 'next/image';

const About = () => {
  return (
    <>
      <section className="py-6 px-6 bg-indigo-100 text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">About Me</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            I am a passionate web developer with experience in building dynamic and responsive web applications.
            I specialize in front-end development with a strong focus on user experience and clean, maintainable code.
            My goal is to build products that not only look great but are also user-friendly and accessible to all.
          </p>
        </div>
      </section>


      
      {/* Hobbies Section */}
      <section className="py-16 px-6 bg-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">My Hobbies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {/* Hobby 1 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/programming.jpg"
                  alt="Photo"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Programming</h4>
              
            </div>

            {/* Hobby 2 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/travelling.webp"
                  alt="Traveling"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Traveling</h4>
              
            </div>

            {/* Hobby 3 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/music.jpg"
                  alt="Music"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Music</h4>
              
            </div>

            {/* Hobby 4 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/gaming.jpg"
                  alt="Gaming"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Gaming</h4>
              
            </div>

            {/* Hobby 5 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
            
                <Image
                  src="/images/cooking.jpg"
                  alt="Cooking"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Cooking</h4>
              
            </div>

            {/* Hobby 6 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/reading.jpg"
                  alt="Reading"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Reading</h4>
              
            </div>

            {/* Hobby 7 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/sports.jpg"
                  alt="Sports"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Sports</h4>
              
            </div>

            {/* Hobby 8 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/movies.jpg"
                  alt="Movies"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Movies</h4>
              
            </div>
          </div>
        </div>
      </section>


      {/* Favorite Food Section */}
      <section className="py-16 px-6 bg-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Favorite Foods</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {/* Food 1 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/pizza.jpg"
                  alt="Pizza"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Pizza</h4>
              
            </div>

            {/* Food 2 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/biryani.jpg"
                  alt="Biryani"
                  width={250}
                  height={250}
                  className="mx-auto  mb-10 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Biryani</h4>
              
            </div>

            {/* Food 3 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
             
                <Image
                  src="/images/burger.webp"
                  alt="Burger"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Burger</h4>
              
            </div>

            {/* Food 4 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/pasta.webp"
                  alt="Pasta"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Pasta</h4>
              
            </div>

            {/* Food 5 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/samosa.jpg"
                  alt="Tacos"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Samosa</h4>
              
            </div>

            {/* Food 6 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/ice-cream.jpg"
                  alt="Ice Cream"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Ice Cream</h4>
              
            </div>

            {/* Food 7 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/gulabjamun.jpg"
                  alt="gulabjanum"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Gulab Janum</h4>
              
            </div>

            {/* Food 8 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/salad.jpg"
                  alt="Salad"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Salad</h4>
              
            </div>
          </div>
        </div>
      </section>

      {/* Favorite Places Section */}
      <section className="py-16 px-6 bg-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Favorite Places</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {/* Place 1 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
            
                <Image
                  src="/images/murree.jpg"
                  alt="murree"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Murree</h4>
            
            </div>

            {/* Place 2 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/moenjodaro.jpeg"
                  alt="moenjodaro"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Moen Jo Daro</h4>
              
            </div>

            {/* Place 3 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/hunzavalley.jpg"
                  alt="hunzavalley"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Hunza Valley</h4>
              
            </div>

            {/* Place 4 */}
            <div className="p-4 bg-red-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
              
                <Image
                  src="/images/azadkashmir.jpg"
                  alt="azadkashmir"
                  width={250}
                  height={250}
                  className="mx-auto mb-2 rounded-md"
                />
                <h4 className="text-xl font-semibold text-white">Azad Kashmir</h4>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
