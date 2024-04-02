import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import Button from "../../Interfaces/Button/Button";
import { motion } from "framer-motion";

const ContactForm = () => {
	return (
		<>
			<section className='lg:px-10 md:mt-24 mt-16 py-14 '>
				<div className='text-center md:pb-10 pb-6'>
					<motion.h2
						whileInView={{ opcity: 1, x: 0 }}
						initial={{ opcity: 0, x: -70 }}
						transition={{ duration: 1 }}
						className='text-lg uppercase text-1 font-medium pb-2'
					>
						Contact
					</motion.h2>
					<motion.h1
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 70 }}
						transition={{ duration: 1 }}
						className='text-4xl capitalize font-semibold'
					>
						Get in touch
					</motion.h1>
				</div>
				<div className='grid sm:grid-cols-2 grid-cols-1 px-3 place-items-center '>
					{/* //! Contact details information */}
					<div className='px-3 py-4'>
						<h1 className='text-3xl pb-3'>
							Don&apos;t be shy! Hit me up! 👇 👉
						</h1>
						<p className='text-xl pb-3 opacity-70'>
							Feel free to reach out through the contact from or find my contact
							information below. Your work is important to me as i strive to
							provide exceptional service.
						</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<IoIosMail className='text-4xl text-1' />
							mulbahjamesoplano@gmail.com
						</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<MdPhoneInTalk className='text-4xl text-1' />
							+250791676207
						</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<MdLocationOn className='text-4xl text-1' />
							KG 763 Gisozi, Kigali, Rwanda
						</p>
					</div>
					{/* //! Contact From  */}
					<div className=' px-1 sm:px-7 py-2 w-full'>
						<form onSubmit={"onSubmit"}>
							<div className='mb-6'>
								<label
									htmlFor='email'
									className='text-xl pb-1 opacity-90 inline-block'
								>
									Your email*
								</label>
								<input
									type='text'
									name='email'
									placeholder='Enter your email'
									required
									className='input'
								/>
							</div>
							<div className='mb-6'>
								<label
									htmlFor='phone'
									className='text-xl pb-1 opacity-90 inline-block'
								>
									Phone Number*
								</label>
								<input
									type='text'
									name='phone'
									placeholder='Enter your phone number'
									required
									className='input'
								/>
							</div>
							<div className='mb-6'>
								<label
									htmlFor='message'
									className='text-xl pb-1 opacity-90 inline-block'
								>
									Message*
								</label>
								<textarea
									name='message'
									required
									placeholder='Enter your message'
									className='input h-24 resize-none py-3'
								></textarea>
							</div>
							<Button text={"Send "} />
							{/* <p className='pt-4 text-red-500'>{result}</p> */}
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactForm;
