import { NavLink } from "react-router-dom";

const Stories = () => {
    return (
        <div className="container py-12 md:py-24">
            <h1 className="mb-2 text-2xl font-extrabold md:text-3xl text-gray">Stories</h1>
            <div class="border border-gray"></div>
            <br></br>
            <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>
            <br></br>
            <NavLink to="/stories">
                <button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded-lg">
                    Add Stories
                </button>
            </NavLink>
            <div class="relative overflow-x-auto p-5">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray dark:bg-gray dark:text-gray">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date Posting
                            </th>
                            <th scope="col" class="px-6 py-3">
                                View
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-gr">
                                Blue Ocean
                            </th>
                            <td class="px-6 py-4">
                                13/01/2003
                            </td>
                            <td class="px-6 py-4">
                                <NavLink to="/stories">
                                    <button class="bg-green-800 hover:bg-green text-white font-bold px-3 rounded-md">
                                        View
                                    </button>
                                </NavLink>
                            </td>
                            <td class="px-6 py-4">
                                <NavLink to="/stories">
                                    <button class="bg-blue-800 hover:bg-blue text-white font-bold px-3 m-1 rounded-md">
                                        Edit
                                    </button>
                                </NavLink>
                                <NavLink to="/stories">
                                    <button class="bg-red-800 hover:bg-red text-white font-bold px-3 rounded-md">
                                        Delete
                                    </button>
                                </NavLink>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Stories;
