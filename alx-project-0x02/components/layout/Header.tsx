export default function Header(){
    return(
        <div className="flex justify-between p-4 w-full">
            <nav className="flex space-x-4">
                <a href="/home" className="text-white">Home</a>
                <a href="/about" className="text-white">About</a>
            </nav>
        </div>
    )
}