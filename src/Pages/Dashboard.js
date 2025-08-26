import logo from '../assets/logo.svg'

const Dashboard = () => {
    return (
        <div className='w-[100vw] min-h-screen flex bg-darkGrey'>
            <div className='w-[20vw] py-10'>
                <img src={logo} alt="logo" className='h-7 w-54 m-4' />
                <div className='text-white ml-4 mt-14 flex'>
                    <div className='font-normal flex items-center justify-center rounded-lg text-sm font-inter bg-lightBlue p-3 w-10'>S</div>
                    <div className='ml-3 flex flex-col items-start justify-center'>
                        <p className='font-semibold text-sm text-semiLightBlack'>Shubham</p>
                        <p className='font-normal text-xs text-semiLightBlack'>link.v1ce.co/gzamoplr</p>
                    </div>
                </div>
                <div className='mt-10 flex flex-col items-start justify-center text-sm font-inter text-semiLightBlack'>
                    <p className='font-semibold text-base text-white mb-6 ml-4'>Dashboard</p>
                    <p className='mb-4 ml-4 cursor-pointer hover:text-white'>Links</p>
                    <p className='mb-4 ml-4 cursor-pointer hover:text-white'>Analytics</p>
                    <p className='mb-4 ml-4 cursor-pointer hover:text-white'>Settings</p>
                    <p className='mb-4 ml-4 cursor-pointer hover:text-white'>Billing</p>
                    <p className='mb-4 ml-4 cursor-pointer hover:text-white'>Integrations</p>
                    <p className='mb-4 ml-4 cursor-pointer hover:text-white'>API</p>
                </div>
            </div>
            <div className='w-[80vw] bg-slate-950'>Main Content</div>
        </div>
    )
}

export default Dashboard