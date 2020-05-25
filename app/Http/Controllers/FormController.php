<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactFormRequest;

use App\Repositories\FormRepositoryInterface;

class FormController extends Controller
{
    /**
     * Type du message à récupérer dans le Repository
     *
     * @var String
     */
    protected $type;

    /**
     * FormController constructor
     *
     * @param   FormRepositoryInterface
     *
     */
    public function __construct(FormRepositoryInterface $type)
    {
        $this->type = $type;
    }

    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Méthode submit du formulaire de contact
     *
     * @param ContactFormRequest $request
     *
     * @return Json
     */
    public function post(ContactFormRequest $request)
    {
        $type = $request->input('type');

        return response()->json(["success" => true, "message" => $this->type->get($type)]);
    }
}
