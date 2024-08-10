export default {
  "entity": {
    "id": "7af888dd-8351-4ecc-a224-b8b1924ca95a",
    "name": "毛泽东传（六）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "逄先知",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives8/main/7af888dd-8351-4ecc-a224-b8b1924ca95a.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东传（六）",
        "authors": [
          "逄先知"
        ],
        "page_start": 1,
        "page_end": 500,
        "dates": []
      }
    ],"ocr": {
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "7af888dd-8351-4ecc-a224-b8b1924ca95a.pdf",
  "resource_type": "book",
  "version": 2
}