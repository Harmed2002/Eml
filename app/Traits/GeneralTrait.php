<?php

namespace App\Traits;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;

trait GeneralTrait
{

    public function getB64Image($base64_image)
    {
        // Obtener el String base-64 de los datos
        $image_service_str = substr($base64_image, strpos($base64_image, ",") + 1);
        // Decodificar ese string y devolver los datos de la imagen
        $image = base64_decode($image_service_str);
        // Retornamos el string decodificado
        return $image;
    }

    public function getB64Extension($base64_image, $full = null)
    {
        // Obtener mediante una expresión regular la extensión imagen y guardarla
        // en la variable "img_extension"
        preg_match("/^data:image\/(.*);base64/i", $base64_image, $img_extension);
        // Dependiendo si se pide la extensión completa o no retornar el arreglo con
        // los datos de la extensión en la posición 0 - 1
        return ($full) ?  $img_extension[0] : $img_extension[1];
    }


    public function getImageB64($filename)
    {
        //Obtener la imagen del disco creado anteriormente de acuerdo al nombre de
        // la imagen solicitada
        $file = Storage::disk('images_base64')->get($filename);
        // Retornar una respuesta de tipo 200 con el archivo de la Imagen
        return new Response($file, 200);
    }
}
