import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reduxToolkit/store/store';
import FolderComponent from './folderComponent/FolderComponent';
import { useContext, } from 'react';
import { Context } from '../../../context/AppContext';
const NewFolder: React.FC = () => {
    const context = useContext(Context);

    const { setDeletecheckMark } = context || {};
    const folderData = useSelector((state: RootState) => state.foldersstore.NewFolderArray);
    const folderDatalength = useSelector((state: RootState) => state.foldersstore.NewFolderArray.length);
    console.log("🚀 ~ file: FolderInterface.tsx:13 ~ folderDatalength:", folderDatalength)
    useEffect(() => {
        if (folderDatalength == 0) {
            if (setDeletecheckMark) {
                setDeletecheckMark(false)
            }
        }
    }, [folderDatalength])


    return (
        <>

            {folderData.length !== 0 &&
                <div className=' select-none my-7'>
                    <section className=" w-11/12 m-auto flex items-center my-7">
                        <p className=" sm:text-4xl text-3xl font-extrabold ">Folders</p>
                    </section>
                    <section className='w-11/12 m-auto mt-7 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-2 '>
                        {folderData.map((string, index) => (
                            <FolderComponent key={index} Folderid={string.Folderid} Foldertitle={string.Foldertitle} />
                        ))}
                    </section>
                </div>
            }


        </>
    )
}

export default NewFolder