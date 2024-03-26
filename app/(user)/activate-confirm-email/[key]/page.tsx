// import {ConfirmIcon} from "@/components/icons/FontAwsome";
import {ConfirmIcon} from "../../../../components/icons/FontAwsome"
type Props = {
	params: {
		key: string;
	};
	searchParams: any;
};

import style from "./style.module.css";
import Button from "./components/Button";

export default function ConfirmEmail(props: Props) {
	return (
		<main className={style.container}>
			{/* Confirm Email Card */}
			<section className="flex flex-col items-center">
				{/* Icon Confirm */}
				<ConfirmIcon color="#080" className="h-44 w-44 mb-8" />
				{/* Title */}
				<h1 className="text-6xl my-4">Email has been Confirmed!</h1>
				{/* Description */}
				<p className="text-3xl">
					Your email comfirmed! you can go to login page by press below button!
				</p>
				<p className="text-3xl my-4">អ៊ីមែលរបស់អ្នកត្រូវបានបញ្ជាក់! អ្នកអាចចូលទៅកាន់ទំព័រចូលដោយចុចប៊ូតុងខាងក្រោម!</p>
				{/* Button */}
				<Button title="Login" className="my-8" />
			</section>
		</main>
	);
}