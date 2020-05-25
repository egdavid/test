<?php

namespace App\Repositories;

class FormRepository implements FormRepositoryInterface
{
    /**
     * Messages de confirmation à retourner à l'utilisateur
     *
     * @var Array
     */
    protected $messages = [
        "Recrutement"   => "Merci pour votre message, votre demande a été transmise au service RH.",
        "Aide"          => "Merci pour votre message, votre demande a été transmise au support client.",
        "Devis"         => "Merci pour votre message, votre demande a été transmise à l’équipe commerciale."
    ];

    /**
     * Retourne le message en fonction du paramètre
     *
     * @param   String  $type  [$type description]
     *
     * @return  String
     */
    public function get(String $type)
    {
        return $this->messages[$type];
    }
}
