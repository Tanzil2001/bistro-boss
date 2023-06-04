import bg from '../../../assets/home/chef-special.jpg' ;
const Description = () => {
    return (
        <div className='h-[400px] relative' style={{backgroundImage: `url("${bg}")`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
            <div className='absolute text-center md:w-2/3 left-52 top-24 bg-white p-10'>
            <h3 className='uppercase text-xl mb-5'>Bistro Boss</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veritatis magnam aliquid quasi necessitatibus vero optio quos distinctio quisquam quibusdam similique voluptates, cumque quam adipisci. Explicabo nobis voluptas possimus ea</p>
            </div>
        </div>
    );
};

export default Description;