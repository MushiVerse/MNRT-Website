<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Post;

class FileUploadController extends Controller
{
    public function attachments(Request $request)
    {
      $gallery = new Post;
      $gallery->image = $request->image;
      if ($request->hasFile('image')){
          $completeFileName = $request->file('image')->getClientOriginalName();
          $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
          $extenshion = $request->file('image')->getClientOriginalExtension();
          $compPic = str_replace(' ', '', $fileNameOnly).'.'.$extenshion;
          $path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/attachments', $compPic);
          $gallery->image = $compPic;
      }
      if($gallery->save()){
          return ['message'=>'Post save successfully'];
      }else{
        return ['message'=>'Something Went Wrong'];

      }
      
    }


    public function newsimage(Request $request)
    {
      $gallery = new Post;
      $gallery->image = $request->image;
      if ($request->hasFile('image')){
          $completeFileName = $request->file('image')->getClientOriginalName();
          $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
          $extenshion = $request->file('image')->getClientOriginalExtension();
          $compPic = str_replace(' ', '', $fileNameOnly).'.'.$extenshion;
          $path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/images/news', $compPic);
          //$path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/attachments', $compPic);
          $gallery->image = $compPic;
      }
      if($gallery->save()){
          return ['message'=>'Post save successfully'];
      }else{
        return ['message'=>'Something Went Wrong'];

      }
      
    }

    public function newimage(Request $request)
    {
      $gallery = new Post;
      $gallery->image = $request->image;
      if ($request->hasFile('image')){
          $completeFileName = $request->file('image')->getClientOriginalName();
          $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
          $extenshion = $request->file('image')->getClientOriginalExtension();
          $compPic = str_replace(' ', '', $fileNameOnly).'.'.$extenshion;
          //$path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/images/news', $compPic);
          $path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/attachments', $compPic);
          $gallery->image = $compPic;
      }
      if($gallery->save()){
          return ['message'=>'Post save successfully'];
      }else{
        return ['message'=>'Something Went Wrong'];

      }
      
    }

    
    public function tourismimage(Request $request)
    {

      $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

      $toursimage = new Post;
      $toursimage->image = $request->image;
      if ($request->hasFile('image')){
          $completeFileName = $request->file('image')->getClientOriginalName();
          $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
          $extenshion = $request->file('image')->getClientOriginalExtension();
          $compPic = str_replace(' ', '', $fileNameOnly).'.'.$extenshion;
          $path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/images/tourism', $compPic);
          //$path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/attachments', $compPic);
          $toursimage->image = $compPic;
      }
      if($toursimage->save()){
          return ['message'=>'Post saved successfully'];
      }else{
        return ['message'=>'Something Went Wrong'];

      }
      
    }


    public function wildlifeimage(Request $request)
    {

      $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

      $wildlifeimage = new Post;
      $wildlifeimage->image = $request->image;
      if ($request->hasFile('image')){
          $completeFileName = $request->file('image')->getClientOriginalName();
          $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
          $extenshion = $request->file('image')->getClientOriginalExtension();
          $compPic = str_replace(' ', '', $fileNameOnly).'.'.$extenshion;
          $path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/images/wildlife', $compPic);
          //$path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/attachments', $compPic);
          $wildlifeimage->image = $compPic;
      }
      if($wildlifeimage->save()){
          return ['message'=>'Post saved successfully'];
      }else{
        return ['message'=>'Something Went Wrong'];

      }
      
    }
    public function antiquitiesimage(Request $request)
    {

      $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

      $antiquitiesimage = new Post;
      $antiquitiesimage->image = $request->image;
      if ($request->hasFile('image')){
          $completeFileName = $request->file('image')->getClientOriginalName();
          $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
          $extenshion = $request->file('image')->getClientOriginalExtension();
          $compPic = str_replace(' ', '', $fileNameOnly).'.'.$extenshion;
          $path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/images/antiquities', $compPic);
          //$path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/attachments', $compPic);
          $antiquitiesimage->image = $compPic;
      }
      if($antiquitiesimage->save()){
          return ['message'=>'Post saved successfully'];
      }else{
        return ['message'=>'Something Went Wrong'];

      }
      
    }

    public function forestimage(Request $request)
    {

      $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

      $forestimage = new Post;
      $forestimage->image = $request->image;
      if ($request->hasFile('image')){
          $completeFileName = $request->file('image')->getClientOriginalName();
          $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
          $extenshion = $request->file('image')->getClientOriginalExtension();
          $compPic = str_replace(' ', '', $fileNameOnly).'.'.$extenshion;
          $path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/images/forest', $compPic);
          $forestimage->image = $compPic;
      }
      if($forestimage->save()){
          return ['message'=>'Post saved successfully'];
      }else{
        return ['message'=>'Something Went Wrong'];

      }
      
    }

    public function beekeepingimage(Request $request)
    {

      $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

      $beekeepingimage = new Post;
      $beekeepingimage->image = $request->image;
      if ($request->hasFile('image')){
          $completeFileName = $request->file('image')->getClientOriginalName();
          $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
          $extenshion = $request->file('image')->getClientOriginalExtension();
          $compPic = str_replace(' ', '', $fileNameOnly).'.'.$extenshion;
          $path = $request->file('image')->storeAs('public/mnrt-web-final/src/assets/images/beekeeping', $compPic);
          $beekeepingimage->image = $compPic;
      }
      if($beekeepingimage->save()){
          return ['message'=>'Post saved successfully'];
      }else{
        return ['message'=>'Something Went Wrong'];

      }
      
    }
}
