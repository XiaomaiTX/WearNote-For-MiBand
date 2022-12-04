import os


def scanzip(path):
    List = []
    filelist = os.listdir(path)
    for filename in filelist:
        filepath = os.path.join(path, filename)
        if os.path.isdir(filepath):
            ls1 = scanzip(filepath)
            if ls1 != []:
                for x in ls1:
                    List.append(x)
        if filepath.endswith(".zip"):
            List.append(filepath)
    return List

def fixImage(path):
    path = path[7:]
    os.system('cd dist && mkdir fix')
    os.system('cd dist && 7z.exe x ' + path + ' -ofix')
    os.system('rd /s /q dist//fix//assets')
    os.system('xcopy assets_fix dist\\fix\\assets /Y /E')
    os.system('copy tools\\7z.exe dist\\fix\\7z.exe')
    os.system('cd dist\\fix && 7z.exe a -tzip r.bin assets pages app.json app.bin')
    filepath,tempfilename = os.path.split(path)
    filename,extension = os.path.splitext(tempfilename)
    os.system('copy dist\\fix\\r.bin out\\' + filename + '.bin')
    os.system('rd /s /q dist')

os.system('zeus build --prune=false')
os.system('copy tools\\unpack.exe unpack.exe')
os.system('unpack.exe')
os.system('del unpack.exe')
os.system('copy tools\\7z.exe dist\\7z.exe')
filelist = scanzip('./dist')
fixImage(filelist[0])
