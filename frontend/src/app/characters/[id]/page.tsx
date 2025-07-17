import { getCharacterById } from "@/actions/characters";

type Props = {
    params: Promise<{ id: string }>
}

export default async function CharacterPage(props: Props) {
    const { id } = await props.params;
    const character = await getCharacterById(id);

    return (
        <div className="h-full w-full p-3 flex flex-col justify-center items-center">
            <div className="flex flex-col bg-primary-foreground border-2 rounded-xl max-w-4xl">
                <div className="flex justify-center items-center p-2">
                    <p className="font-semibold">{character?.name}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-full sm:flex-row sm:items-start sm:p-3 sm:pt-0">
                    <img
                        src={`${character?.image}`}
                        alt={`${character?.name}'s photo`}
                    />
                    <div className="p-3 flex flex-col sm:p-0 sm:pl-3">
                        <div className="flex">
                            <p className="mr-1 font-semibold text-nowrap">Gender:</p>
                            <p>{character?.gender}</p>
                        </div>
                        <div className="flex">
                            <p className="mr-1 font-semibold text-nowrap">Status:</p>
                            <p>{character?.status}</p>
                        </div>
                        <div className="flex">
                            <p className="mr-1 font-semibold text-nowrap">Species:</p>
                            <p>{character?.species}</p>
                        </div>
                        <div className="flex">
                            <p className="mr-1 font-semibold text-nowrap">Type:</p>
                            <p>{character?.type}</p>
                        </div>
                        <div className="flex">
                            <p className="mr-1 font-semibold text-nowrap">Origin:</p>
                            <p>{character?.origin.name}</p>
                        </div>
                        <div className="flex">
                            <p className="mr-1 font-semibold text-nowrap">Last seen at:</p>
                            <p>{character?.location.name}</p>
                        </div>
                        <div className="flex">
                            <p className="mr-1 font-semibold text-nowrap">First apearance:</p>
                            <p>{character?.created.slice(0, 4)}</p>
                        </div>
                        {character?.seasonAppearances.map(seasonAppearance => (
                            <div key={seasonAppearance.season}>
                                <div className="flex">
                                    <p className="mr-1 font-semibold text-nowrap">{`Season ${seasonAppearance.season} apearances:`}</p>
                                    <p>{seasonAppearance.appearances}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex">
                            <p className="mr-1 font-semibold text-nowrap">Total apearances:</p>
                            <p>{character?.totalAppearances}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}