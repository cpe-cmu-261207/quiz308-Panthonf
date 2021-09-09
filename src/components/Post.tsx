

const Post = () => {
    return (
        <div className="space-y-2">

            {/* image and name */}
            <div className="flex space-x-2 items-center">
                <img className="w-12 h-12 rounded-full" src="/profileImages/handsome.jpg"></img>
                <span className='font-semibold text-lg text-white'>Panthon Kansap 630612105</span>
            </div>

            {/* status message */}
            <p className='text-white'>Quiz ของ่ายกว่านี้เถอะนะครับ -.- #261207</p>

            {/* like section */}
            <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>1,000 คน</p>
            </div>

        </div>
    );
}

export default Post;