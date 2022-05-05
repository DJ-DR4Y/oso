<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Style;
use App\Models\Tour;
use App\Models\User;
use Illuminate\Http\Request;

class WebController extends Controller
{
    // protected $phrases;
    // protected $messages;
    // protected $tours;
    public function index()
    {

        // Changement du Time Zone dans la configuration du projet
        date_default_timezone_set("America/Toronto");

        // Créer une liste pour les options séparées de date et heure locale
        list($year, $month, $day, $hour, $min, $sec) = explode("/", date('Y/m/d/H/i/s'));
        $time = $hour . $min . $sec;

        $basic_date = $year . "/" . $month . "/" . $day;


        $date = now()->toDateString();
        $basic_time = now()->toTimeString();



        return view('accueil', ['tours' => Tour::orderByDesc('id')->get(), 'date' => $date, 'basic_date' => $basic_date, 'time' => $time, 'basic_time' => $basic_time]);
        // return view('accueil', ['styles' => Style::all(), 'date' => $date, 'basic_date' => $basic_date, 'time' => $time, 'basic_time' => $basic_time]);
        // return view('accueil', ['styles' => Style::latest()->get(), 'date' => $date, 'basic_date' => $basic_date, 'time' => $time, 'basic_time' => $basic_time]);
    }

    public function tours()
    {

        // $tours = $tours;
        // dd($tours);
        // Changement du Time Zone dans la configuration du projet
        // date_default_timezone_set("America/Toronto");

        // Créer une liste pour les options séparées de date et heure locale

        // list($year, $month, $day, $hour, $min, $sec) = explode("/", date('Y/m/d/H/i/s'));
        // $time = $hour . $min . $sec;

        // $basic_date = $year . $month . $day;


        // $date = now()->toDateString();
        // $basic_time = now()->toTimeString();



        // return view('accueil', ['tours' => Tours::latest()->get(), 'date' => $date, 'basic_date' => $basic_date, 'time' => $time, 'basic_time' => $basic_time]);

        // return view('accueil', [
        //     'tours' => Tour::all()
        // ]);
        return view('tours', ['tours' => Tour::orderByDesc('id')->get()]);
        // return view('tours', ['tours' => Tour::limit(13)->get()]);
        // return view('tours', ['tours' => Tour::where('id', '>', 10)->get()]);
    }

    public function show($id)
    {

        return view('show', [
            "tour" => Tour::findOrFail($id),
        ]);
    }

    public function styles()
    {
        return view('styles', ['styles' => Style::all()]);

        // return view('users', [
        //     "user" => User::findOrFail($id),
        // ]);
    }
}
