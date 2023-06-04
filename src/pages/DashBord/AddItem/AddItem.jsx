import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN ;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const image_hosting_url =`https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(image => {
            console.log(image);
            if(image.success){
                const imgURL = image.data.display_url ;
                const {category, price, name, recipe} = data;
                const newItem = {category, price: parseFloat(price), name, recipe, image:imgURL}
            
                axiosSecure.post('/menu', newItem)
                .then(data =>{
                    reset();
                    if(data.data.insertedId){
                        alert('successfully add an Item')
                    }
                })
            }
        } )
    }
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's New" heading="Add an item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex gap-3 my-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true, })} className="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number"
                            {...register("price", { required: true })}
                            placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"
                        {...register("recipe", { required: true, maxLength: 420 })}
                        placeholder="Details"></textarea>
                </div>
                <div className="form-control w-full mt-5">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-5" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;