export const traducir = async (text)=>{
    const traductor = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|es`);
    const traducido = await traductor.json();

    return traducido.responseData.translatedText;
}